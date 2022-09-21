export interface ApiResponse<T>{
  data: T;
  isSuccess: boolean;
  errors: string[];
  total: number
}

export interface ApiResponseList<T>{
  data: T[];
  isSuccess: boolean;
  errors: string[];
  total: number
}
