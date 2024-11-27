import { createClient } from '@supabase/supabase-js';
import * as dotenv from 'dotenv';
dotenv.config();
const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_KEY = process.env.SUPABASE_KEY;
if (!SUPABASE_URL || !SUPABASE_KEY) {
  console.error('As variáveis SUPABASE_URL ou SUPABASE_KEY não estão definidas.');
  process.exit(1); 
}

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

export default async function uploadFile(bucket: string, file: File | Buffer, fileName: string): Promise<string | null> {
  const { data, error } = await supabase.storage
    .from(bucket)
    .upload(fileName, file, {
      cacheControl: '3600',
    });

  if (error) {
    console.error('Erro ao fazer upload:', error.message);
    return null;
  }

  const { data: publicUrlData } = supabase.storage.from(bucket).getPublicUrl(fileName);
  return publicUrlData?.publicUrl;
}
