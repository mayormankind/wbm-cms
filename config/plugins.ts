import type { Core } from '@strapi/strapi';
import path from 'path';

const config = ({ env }: Core.Config.Shared.ConfigParams): Core.Config.Plugin => ({
  upload: {
    config: {
      provider: path.resolve(process.cwd(), 'providers/strapi-provider-upload-supabase'),
      providerOptions: {
        apiUrl: env('SUPABASE_URL'),
        apiKey: env('SUPABASE_SERVICE_ROLE_KEY'),
        bucket: env('SUPABASE_BUCKET', 'media'),
        directory: env('SUPABASE_DIRECTORY', ''),
        options: {},
      },
      actionOptions: {
        upload: {},
        uploadStream: {},
        delete: {},
      },
    },
  },
});

export default config;
