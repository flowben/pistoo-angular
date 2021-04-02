import { Injectable } from '@angular/core';
import { Story } from '../model/story.model';

@Injectable({
  providedIn: 'root' 
})

export class StoryService {

  storyList: Story[] = [];

  constructor() {
    const story1: Story = new Story;
    story1.title = "Parcours 1 : Le Vieux-Lyon";
    story1.image = "../../../assets/img/story0.png"
    story1.description = 'Découvrez le Vieux-Lyon avec ses traboules et leurs secrets! Vous déambulerez dans ce quartier préservé depuis le XVIe sciècle à travers ses façades, ses gargouilles, ses passages et ses rues pavées'
    story1.level = 'Facile';
    story1.time = '56 min';
    story1.distance = '2km';
    this.storyList.push(story1);
 
    const story2: Story = new Story;
    story2.title = "Parcours 2 : La Croix-Rousse";
    story2.image = "../../../assets/img/story1.jpg"
    story2.description = "Découvrez la Croix-Rousse avec ses pentes semées de traboules et d’escaliers les périodes gallo-romaines! Vous décrouvirez l'histoire des canuts par son dédale de rues, de passage et de places accrochées à la colline."
    story2.level = 'Moyen';
    story2.time = '78 min';
    story2.distance = '5 km';
    this.storyList.push(story2);

    const story3: Story = new Story;
    story3.title = "Parcours 3 : Fourvière";
    story3.image = "../../../assets/img/story3.jpg"
    story3.description = "Découvrez Fourvière et ses alentours ..."
    story3.level = 'Difficile';
    story3.time = '96 min';
    story3.distance = '5 km';
    this.storyList.push(story3);

  }

}
