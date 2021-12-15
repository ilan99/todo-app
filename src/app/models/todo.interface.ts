export interface Itodo {
  id: number;
  title: string;
  description: string;
  isCompleted: boolean;
  isArchived: boolean;
  endDate: Date | number;
  selected: boolean;
}
