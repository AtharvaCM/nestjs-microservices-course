import { Observable } from 'rxjs';
import {
  AuthenticateRequest,
  AuthServiceController,
  AuthServiceControllerMethods,
  User,
} from 'types/proto/auth';

import { Controller } from '@nestjs/common';

@Controller()
@AuthServiceControllerMethods()
export class AuthController implements AuthServiceController {
  authenticate(
    request: AuthenticateRequest
  ): Promise<User> | Observable<User> | User {
    return {} as any;
  }
}
