import { Rooms } from './../Models/room.js';
import { Resident } from './../Models/resident.js';
import { roomsAvailability } from '../Data/roomsData.js';

export class HostelService {
    private rooms: Rooms[] = [];
    private residents: Resident[] = [];
    constructor() {
        this.loadData();
    }
    
    loadData():void{
        const storedRooms= localStorage.getItem('rooms');
        const storedResidents= localStorage.getItem('residents');
        if(storedRooms){
            this.rooms = JSON.parse(storedRooms);
        }else{
            this.rooms = roomsAvailability;
        }
        if(storedResidents){
            this.residents = JSON.parse(storedResidents);
        }else{
            this.residents = [];
        }
        console.log(this.rooms);
        console.log(this.residents);
    }

    // ! Getter for rooms and residents
    get getRooms(){
        return this.rooms;
    }
    get getResidents(){
        return this.residents;
    }

    // ! Storing the data
    saveData(){
        localStorage.setItem('rooms', JSON.stringify(this.rooms));
        localStorage.setItem('residents', JSON.stringify(this.residents));
    }

    // ! Add user
    addResident(
        name:string, 
        age:number, 
        phone:string, 
        roomNumber:number,
        checkInDate:string, 
    ) {
        const room = this.rooms.find(r => r.roomNumber === roomNumber);
        if (!room) {
            throw new Error(`Room ${roomNumber} does not exist.`);
        } else if (room.IsOccupied) {
            throw new Error(`Room ${roomNumber} is already occupied.`);
        }
        const newResident: Resident = {
            id: Date.now().toString().slice(0,5),
            name: name,
            age: age,
            phone: phone,
            roomNumber: roomNumber,
            checkInDate: checkInDate,
        };
        this.residents.push(newResident);
        room.IsOccupied = true;
        this.saveData();
        console.log(this.rooms);
        console.log(this.residents);
    }
    
    // ! Deleteing Resident
    removeResident(residentID: string){
        const index = this.residents.findIndex((r) => r.id === residentID);
        if (index == -1) {
            throw new Error("Resident ID doesn't exist");
        }
        const resident = this.residents[index];
        const room = this.rooms.find((r) => r.roomNumber == resident.roomNumber);
        if (!room){
            throw new Error("Room doesn't exist");
        }
        room.IsOccupied = false;
        this.residents.splice(index, 1);
        this.saveData();
    }
    
    // ! Get vacant rooms
    getVacantRooms(){
        return this.rooms.filter((r) => !r.IsOccupied);
    }

    // ! Get Occupied rooms
    getOccupiedRooms(){
        return this.rooms.filter((r) => r.IsOccupied);
    }

    // ! Room States
    getRoomStates(){
        const total =this.rooms.length;
        const occupied = this.getOccupiedRooms().length;
        const result = total - occupied;
        return {total, occupied, result};
    }
}   