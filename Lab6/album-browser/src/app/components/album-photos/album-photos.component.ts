import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { AlbumService } from '../../services/album.service';
import { Photo } from '../../models/photo.model';

@Component({
    selector: 'app-album-photos',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './album-photos.component.html',
    styleUrl: './album-photos.component.css'
})

export class AlbumPhotosComponent implements OnInit {
    photos: Photo[] = [];
    albumId = 0;
    loading = true;

constructor(
    private route: ActivatedRoute,
    private router: Router,
    private albumService: AlbumService
) {}

ngOnInit() {
    this.albumId = Number(this.route.snapshot.paramMap.get('id'));
    this.albumService.getAlbumPhotos(this.albumId).subscribe(data => {
        this.photos = data;
        this.loading = false;
    });
}

goBack() { this.router.navigate(['/albums', this.albumId]); }
}