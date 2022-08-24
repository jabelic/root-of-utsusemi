export type SnsKind = 'Twitter' | 'Pixiv' | 'SKIMA'

declare module "*.svg" {
    const content: any;
    export default content;
}