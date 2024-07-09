import dts from 'bun-plugin-isolated-decl';
import fs from 'node:fs/promises';

export async function build(): Promise<void> {
  await fs.mkdir("dist", { recursive: true })
  await Bun.build({
    entrypoints: ['index.ts'],
    outdir: 'dist',
    plugins: [dts({ })],
  });
}

if (import.meta.main) {
  await build()
}
