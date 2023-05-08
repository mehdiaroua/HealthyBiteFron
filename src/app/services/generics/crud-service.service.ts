import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CrudOperations } from './crud-operations';

export abstract class CrudService<T, ID> implements CrudOperations<T, ID> {
  constructor(protected _http: HttpClient, protected _base: string) {}

  create(t: T): Observable<T> {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    let options = { headers: headers };

    return this._http.post<T>(this._base + '/', t, options);
  }

  update(id: ID, t: T): Observable<T> {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    let options = { headers: headers };
    return this._http.put<T>(this._base + '/' + id, t, options);
  }

  getById(id: ID): Observable<T> {
    return this._http.get<T>(this._base + '/' + id);
  }

  getAll(): Observable<T[]> {
    return this._http.get<T[]>(this._base + '/');
  }

  delete(id: ID): Observable<T> {
    return this._http.delete<T>(this._base + '/' + id);
  }
}
