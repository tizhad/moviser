import {Injectable} from "@angular/core";
import {Action, Selector, State, StateContext} from "@ngxs/store";
import produce from "immer";
import {throwError} from "rxjs";
import {catchError, tap} from "rxjs/operators";

// @State<PluginsModel>({
//   name: 'pluginsModel'
// })

@Injectable()
export class movie {
  constructor() {
  }
  // @Selector()
  // static getPlugins(state: PluginsModel) {
  //   return state.plugins;
  // }
  // private handleError(err: any, message: string){
  //   this.alertService.error(message, err);
  //   return throwError(err);
  // }

  // @Action(LoadPlugins)
  // loadPlugins(ctx: StateContext<PluginsModel>, {}: LoadPlugins) {
  //   return this.pluginService.getAllPlugins().pipe(
  //     catchError(error => {
  //       console.log('failed to load plugins', error);
  //       return this.handleError(error, 'Could not load all plugins');
  //     }),
  //     tap((result: PluginsModel) => {
  //       this.pluginService.registerPluginsAsRoute(result.plugins);
  //       const state = produce(ctx.getState(), draftState => {
  //         draftState = result;
  //       })
  //       ctx.setState(state);
  //       console.log('plugins loaded from backend',result);
  //     }));
  // }
}
