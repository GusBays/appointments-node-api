import { container } from 'tsyringe';
import { expect, it, test } from 'vitest';
import { AppointmentController } from '../Application/AppointmentController';
import { AppointmentService } from '../Application/AppointmentService';
import { AppointmentServiceInterface } from '../Domain/AppointmentServiceInterface';
import { AppointmentTypeEnum } from '../Domain/AppointmentTypeEnum';

const shopId = 1;
const startsAt = new Date();
const endsAt = new Date(startsAt.getDate() + 1);
const id = 1;
const employeeId = 1;
const customerId = 1;
const createdAt = new Date();
const updatedAt = new Date();

test('create an appointment', () => {
    expect(shopId).toBeDefined();
})

