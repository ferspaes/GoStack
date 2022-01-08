import { Router } from 'express';
import { startOfHour, parseISO } from 'date-fns';
import AppointmentRepository from '../repositories/AppointmentsRepository';

const appointmentsRouter = Router();
const appointmentRepository = new AppointmentRepository();

appointmentsRouter.post('/', (request, response) => {
    const { provider, date } = request.body;
    const parsedDate = startOfHour(parseISO(date));
    const isDateAlreadyBooked = appointmentRepository.getByDate(provider, parsedDate);

    if(isDateAlreadyBooked){
        return response
            .status(400)
            .json({ "message": "The selected date: (" + parsedDate + ") is already booked. Please select a different date." });
    }

    const appointment = appointmentRepository.create(provider, parsedDate);

    return response.json({ "Appointment": appointment });
});

appointmentsRouter.get('/', (request, response) => {
    const appointments = appointmentRepository.getAll();
    
    return response.json({ "Appointments": appointments });
});

export default appointmentsRouter;