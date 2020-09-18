export interface ApiListInterface<IEntity> {
  // from API
  count: number;
  page: number;
  pageCount: number;
  total: number;
  data: IEntity[];

  // Locally added fields
  isLoading: boolean;
  isLoaded: boolean;
  isInserting: boolean;
  updatedId: null|string;
}
