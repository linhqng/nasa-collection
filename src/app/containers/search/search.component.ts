import { Component, OnInit, TemplateRef } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Article } from '../../core/models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  public article: Article = {
    id: 1,
    author: 'To the moon and back',
    download_url: 'https://picsum.photos/id/1004/5616/3744',
  };
  public articleSearch: string = 'Moon';

  constructor(private router: Router, private modalService: NgbModal) {}

  ngOnInit(): void {}

  public openModal(addModal: TemplateRef<HTMLElement>): void {
    this.modalService.open(addModal, { centered: true });
  }

  public openVideo(id: number): void {
    this.router.navigate(['/video', id]);
  }
}
