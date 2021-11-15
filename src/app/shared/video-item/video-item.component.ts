import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { Article } from '../../core/models';

@Component({
  selector: 'app-video-item',
  templateUrl: './video-item.component.html',
  styleUrls: ['./video-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VideoItemComponent implements OnInit {
  @Input() article: Article = {
    id: 0,
    author: '',
    download_url: '',
  };
  @Input() isSearch: boolean = false;
  @Output() handleOpenAddModal = new EventEmitter();
  @Output() handleOpenEditModal = new EventEmitter();
  @Output() handleOpenVideo = new EventEmitter<number>();

  public isLikeArticle: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  public handlePlayVideo(): void {
    this.handleOpenVideo.emit(this.article.id);
  }

  public likeArticle(): void {
    console.log('like article');
    this.isLikeArticle = !this.isLikeArticle;
  }
}
