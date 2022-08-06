import jsonData from './data.json';

export interface IHeader {
  heading: string;
  description: string;
  ogDescription: string;
}

export const data: IHeader = jsonData;
