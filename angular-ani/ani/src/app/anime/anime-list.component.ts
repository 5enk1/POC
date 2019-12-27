import { Component } from "@angular/core";

@Component({
  selector: "app-anime-list",
  templateUrl: "anime-list.component.html"
})
export class AnimeListComponent {
  title: string = "anime list";
  animes: any[] = [
    {
      img: "",
      animeName: "test1",
      episode: 15,
      season: 2,
      date: "2019.12.27"
    },
    {
      img: "",
      animeName: "test2",
      episode: 15,
      season: 4,
      date: "1995.1.5"
    }
  ];
}
