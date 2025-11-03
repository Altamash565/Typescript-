interface Address  {
    country: string;
    zipcode: string;
    houseNumber: number;
    city: string;
    state: string
}

export interface Person {
    firstName: string,
    lastName: string,
    age?: Number
    address?: Address;
}