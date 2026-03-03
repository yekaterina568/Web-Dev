import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AlbumService } from '../../services/album.service';
import { Album } from '../../models/album.model';

@Component({
    selector: 'app-albums',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './albums.component.html',
    styleUrl: './albums.component.css'
})
export class AlbumsComponent implements OnInit {
    albums: Album[] = [];
    loading = true;

    constructor(private albumService: AlbumService, private router: Router) { }

    ngOnInit() {
        this.albumService.getAlbums().subscribe(data => {
            this.albums = data;
            this.loading = false;
        });
    }

    goToDetail(id: number) {
        this.router.navigate(['/albums', id]);
    }

    onDelete(id: number, event: Event) {
        event.stopPropagation();
        this.albumService.deleteAlbum(id).subscribe(() => {
            this.albums = this.albums.filter(a => a.id !== id);
        });
    }
}