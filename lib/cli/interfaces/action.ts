export interface Action {
  run(): Promise<void>;
}
