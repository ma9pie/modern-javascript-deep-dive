export interface ChapterItem {
  id: number;
  title: string;
  component: (() => JSX.Element) | null;
}
