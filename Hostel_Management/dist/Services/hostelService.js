export class HostelService {
    constructor() {
        this.rooms = [];
        this.residents = [];
    }
    loadData() {
        const storedRooms = localStorage.getItem('rooms');
        const storedResidents = localStorage.getItem('residents');
        console.log(storedRooms);
        console.log(storedResidents);
    }
}
