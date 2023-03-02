export class LocalStorage {
  private readonly storage = new Map<string, any>();
  private static instance: LocalStorage;

  private constructor() {}

  public static getInstance(): LocalStorage {
    LocalStorage.instance = LocalStorage.instance ?? new LocalStorage();
    return LocalStorage.instance;
  }

  public getItem(key: string): any{
    return this.storage.get(key);
  }

  public setItem(key: string, value: any): void {
    this.storage.set(key, value);
  }

  public removeItem(key: string) {
    this.storage.delete(key);
  }
}
