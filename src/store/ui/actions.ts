import { Commit } from 'vuex';
import Route from '../../models/Route';

export const setRouteTo = ( { commit }: { commit: Commit }, routeTo: Route ) => {
  commit( 'setRouteTo', routeTo );
};

export const setLoading = ( { commit }: { commit: Commit }, loading: boolean ) => {
  commit( 'setLoading', loading );
}

export const setAlertMessage = ( { commit }: { commit: Commit }, {message = '', type = ''}) => {
  commit( 'setAlertMessage', { message, type });
}