import Appointment from "../models/Appointments";
import { isEqual } from 'date-fns';

class AppointmentsRepository {
    private appointments: Appointment[];

    constructor(){
        this.appointments = [];
    }

    public create(provider: string, date: Date): Appointment{
        const appointment = new Appointment(provider, date);

        this.appointments.push(appointment);

        return appointment;
    }

    public getAll(): Appointment[] | null {
        return this.appointments;
    }

    public getByDate(provider: string, date: Date): Appointment | null{
        const appointment = this.appointments.find(appointment => isEqual(appointment.date, date) && appointment.provider == provider);
        return appointment || null;
    }
}

export default AppointmentsRepository;