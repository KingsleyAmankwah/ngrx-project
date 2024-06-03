import { createReducer, on } from '@ngrx/store';
import { User } from '../../types/user';
import { authActions } from './auth.action';

export interface authState {
  user: User | null;
  loading: boolean;
  error: string | null;
}

export const initialAuthState: authState = {
  user: null,
  loading: false,
  error: null,
};


