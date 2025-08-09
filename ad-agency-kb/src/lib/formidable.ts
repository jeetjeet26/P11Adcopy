
import type { IncomingMessage } from 'http';
import type { NextApiRequest } from 'next';
// Import dynamically to avoid type dependency and to ensure server-only usage
// eslint-disable-next-line @typescript-eslint/no-var-requires
const formidable = require('formidable');

export const parseForm = (
  req: NextApiRequest
): Promise<{ fields: unknown; files: unknown }> => {
    return new Promise((resolve, reject) => {
        const form = formidable({ 
            multiples: false,
            // Keeping files on disk allows for streaming and processing larger files 
            // without hitting memory limits.
            keepExtensions: true, 
        });

        form.parse(
          req as unknown as IncomingMessage,
          (err: any, fields: any, files: any) => {
            if (err) {
                return reject(err);
            }
            resolve({ fields, files });
          }
        );
    });
}; 