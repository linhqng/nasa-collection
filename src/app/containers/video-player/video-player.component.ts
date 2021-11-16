import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { CollectionService } from '../../core/services/collection.service';
import { Article } from '../../core/models';

@Component({
  selector: 'app-video-play',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VideoPlayerComponent implements OnInit {
  public article: Article = {
    id: 0,
    author: '',
    download_url: '',
  };

  constructor(
    private _location: Location,
    private route: ActivatedRoute,
    private collectionService: CollectionService,
    private changeDetection: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.collectionService
      .getArticle(+this.route.snapshot.params['id'])
      .subscribe((article) => {
        this.article = article;
        this.changeDetection.detectChanges();
      });
  }

  public closeVideoPlayer(): void {
    this._location.back();
  }
}
