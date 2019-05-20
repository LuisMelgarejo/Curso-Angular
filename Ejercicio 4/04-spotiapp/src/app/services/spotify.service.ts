import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) { }

  getQuery(query: string) {
    const url = `https://api.spotify.com/v1/${ query }`;

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQDmCzaONTwC-qAe-bia5hQIdzzNEe3VYcrbzj52kcVTreNmp5D4j5SylwYEgkWSvBqIltc0MchWGH1JKyA'
    });

    return this.http.get(url, {headers});
  }

  getNewReleases() {

    // const headers = new HttpHeaders({
    //   'Authorization': 'Bearer BQBnVJgt2IgGcLkOmHAvT8dBZAInyLtHGdwJ2s7JhdwuHf3CZyVVm1ZxgcTbuBgjk6kIpKe6mw3zJvzRFNE'
    // });

    // return this.http.get('https://api.spotify.com/v1/browse/new-releases', {headers})
    //         .pipe( map( data => {
    //           return data['albums'].items;
    //         }));

    return this.getQuery('browse/new-releases')
          .pipe( map( data => {
           return data['albums'].items;
          }));
  }

  getArtistas(termino: string) {

    // const headers = new HttpHeaders({
    //   'Authorization': 'Bearer BQBnVJgt2IgGcLkOmHAvT8dBZAInyLtHGdwJ2s7JhdwuHf3CZyVVm1ZxgcTbuBgjk6kIpKe6mw3zJvzRFNE'
    // });

    // return this.http.get(`https://api.spotify.com/v1/search?query=${termino}&type=artist&market=AR&offset=0&limit=15`, {headers})
    //         .pipe( map( data => {
    //           return data['artists'].items;
    //         }));

    return this.getQuery(`search?query=${termino}&type=artist&market=AR&offset=0&limit=15`)
              .pipe( map( data => {


               return data['artists'].items;
             }));

  }

  getArtista(id: string) {

    return this.getQuery(`artists/${ id }`);

  }

  getTopTracks(id: string) {

    return this.getQuery(`artists/${ id }/top-tracks?country=us`).pipe( map( data => {


      return data['tracks'];
    }));
  }
}
