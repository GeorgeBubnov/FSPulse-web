declare module '@prisma/nextjs-monorepo-workaround-plugin' {
    import { Compiler } from 'webpack';
    export class PrismaPlugin {
      constructor(): void;
      apply(compiler: Compiler): void;
    }
  }
  