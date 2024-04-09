import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';
import { IFeatureFlags } from '../shared/interfaces/ifeature-flags';

@Injectable({
	providedIn: 'root'
})
export class FeatureFlagsService {

	config!: IFeatureFlags;
	configUrl = 'assets/feature-flags.json'; // <-- URL for getting the config
	// configUrl = 'https://gist.githubusercontent.com/MatthijsKamstra/becdaa3dafa775eff51c31381488f91b/raw/6df721dd45fe683a4ed792f0e8d8fe8201f8806d/feature-flags.json'; // <-- URL for getting the config

	constructor(private http: HttpClient) { }

	/**
   * We convert it to promise so that this function can
   * be called by the APP_INITIALIZER
   */
	loadConfig() {
		return this.http
			.get<IFeatureFlags>(this.configUrl)
			.pipe(tap(data => {
				this.config = data;
			}))
			.toPromise();
	}

	isFeatureEnabled(key: string) {
		// if (this.config && has(this.config, key)) {
		// 	return get(this.config, key, false);
		// }
		// return false;
		return this.config[key];
	}
}
