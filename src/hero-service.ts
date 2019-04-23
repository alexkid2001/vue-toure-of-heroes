import { Hero } from '@/hero';
import { HEROES } from "@/mock-heroes";
import { Observable, of} from 'rxjs';
import { MessageService } from './message-service';

const messageService= new MessageService;

export default class HeroService {


    // constructor(private messageService: MessageService) {}

    // getHeroes(): Observable<Hero[]> {
    //     messageService.add('HeroService: fetched heroes');
    //     return of(HEROES);
    // }

    getHeroes() {
        messageService.add('HeroService: fetched heroes');
        return of(HEROES);
    }

    getHero(id: number) {
        // TODO: send the message _after_ fetching the hero
        messageService.add(`HeroService: fetched hero id=${id}`);
        return of(HEROES.find(hero => hero.id === id));
    }

}