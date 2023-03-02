import data, {FeatureFlag} from './data';
import {LocalStorage} from "./local-storage";

export class FeatureFlagService {
  private static _instance: FeatureFlagService;
  private readonly _storage: LocalStorage;

  private constructor() {
    this._storage = LocalStorage.getInstance();
  }

  public async initConfig(): Promise<void> {
    try {
      const data = await getFlagValues<FeatureFlag>();
      for (let key in data as object) {
        this._storage.setItem(key, data[key]);
      }
    } catch (e: unknown) {
      console.error(e);
    }
  }

  public static instance(): FeatureFlagService {
    FeatureFlagService._instance = FeatureFlagService._instance ?? new FeatureFlagService();
    return FeatureFlagService._instance;
  }

  public isEnabled(key: string): boolean {
    return !!this._storage.getItem(key);
  }
}

export const getFlagValues = <T>() => Promise.resolve(data)
