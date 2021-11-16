import { Component, OnInit, TemplateRef } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { CollectionService } from '../../core/services/collection.service';
import { Article } from '../../core/models';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public articles$: Observable<Article[]> = new Observable<Article[]>();

  constructor(
    private router: Router,
    private collectionService: CollectionService,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    this.articles$ = this.collectionService.getArticles({
      limit: 10,
    });
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
