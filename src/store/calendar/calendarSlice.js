import { createSlice } from '@reduxjs/toolkit';

/* Sujeto de prueba
import { addHours } from 'date-fns';
const tempEvent = {
    _id: new Date().getTime(),
    title: 'Cumpleaños del jefe',
    notes: 'Hay que comprar el pastel',
    start: new Date(),
    end: addHours(new Date(), 2),
    bgColor: '#3a4e21',
    user: {
        _id: '13d53f4',
        name: 'Bruno'
    }
}*/


export const calendarSlice = createSlice({
    name: 'calendar',
    initialState: {
        isLadingEvents: true,
        events: [ /* tempEvent,*/],
        activeEvent: null
    },
    reducers: {
        onSetActiveEvent: (state, { payload }) => {
            state.activeEvent = payload;
        },
        onAddNewEvent: (state, { payload }) => {
            state.events.push(payload);
            state.activeEvent = null;
        },
        onUpdateEvent: (state, { payload }) => {
            state.events = state.events.map(event => {
                if (event.id === payload.id) {
                    return payload;
                }
                return event;
            });
        },
        onDeleteEvent: (state) => {
            if (state.activeEvent) {
                state.events = state.events.filter(event => event.id !== state.activeEvent.id);
                state.activeEvent = null;
            }
        },
        onLoadEvents: (state, { payload = [] }) => {
            state.isLadingEvents = false;
            // state.events = payload;
            payload.forEach(event => {
                const exists = state.events.some(dbEvents => dbEvents.id === event.id);
                if (!exists) {
                    state.events.push(event);
                }
            });
        },
        onLogoutCalendar: (state) => {
            state.isLadingEvents = true;
            state.events = [];
            state.activeEvent = null;
        }
    }
});

// Action creators are generated for each case reducer function
export const {
    onAddNewEvent,
    onDeleteEvent,
    onLoadEvents,
    onLogoutCalendar,
    onSetActiveEvent,
    onUpdateEvent,
} = calendarSlice.actions;