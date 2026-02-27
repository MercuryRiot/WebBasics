import { Rooms } from './../Models/room';
import { Resident } from './../Models/resident';
import { roomsAvailability } from '../Data/roomsData';

export class HostelService {
    private rooms: Rooms[] = [];
    private residents: Resident[] = [];
    constructor() {}
    loadData():void{
        const storedRooms= localStorage.getItem('rooms');
        const storedResidents= localStorage.getItem('residents');
        console.log(storedRooms);
        console.log(storedResidents);
    }
}

