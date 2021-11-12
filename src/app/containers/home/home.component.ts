import { Component, OnDestroy, OnInit, TemplateRef } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { CollectionService } from '../../core/services/collection.service';
import { Article } from '../../core/models';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  public articles: Article[] = [];
  private articleSubscription: Subscription = new Subscription();

  constructor(
    private router: Router,
    private collectionService: CollectionService,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    this.articleSubscription = this.collectionService
      .getArticles({ limit: 10 })
      .subscribe((articles) => {
        this.articles = articles;
      });
  }

  ngOnDestroy() {
    this.articleSubscription.unsubscribe();
  }

  public addArticle(): void {
    this.router.navigate(['/nasa-search']);
  }

  public openVideo(id: number): void {
    this.router.navigate(['/video', id]);
  }

  public openModal(addModal: TemplateRef<HTMLElement>): void {
    this.modalService.open(addModal, { centered: true });
  }
}
