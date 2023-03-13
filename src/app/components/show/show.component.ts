import { OnInit } from '@angular/core';
import { Component } from '@angular/core';


//IMPORTA EL MODELO
import { Post } from 'src/app/post.model';
//IMPORTA EL SERVICIO
import { PostService } from 'src/app/post.service';


@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {
  Posts: Post[]

  constructor( private postService: PostService) { }

  ngOnInit(): void {
    this.postService.getPosts().subscribe((res) => {
    this.Posts = res.map((e) => {
    return {
    id: e.payload.doc.id,
    ...(e.payload.doc.data() as Post)
    };
    });
    });
    }

  
  deleteRow = (post) => this.postService.deletePost(post)

}
