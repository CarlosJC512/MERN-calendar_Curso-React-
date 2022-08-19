import { addHours } from 'date-fns';
import { useUiStore, useCalendarStore } from '../../hooks';

export const FabAddNew = () => {

    const { openDateModal } = useUiStore();
    const { setActiveEvent } = useCalendarStore()

    const handleClickNew = () => {
        setActiveEvent({
            title: '',
            notes: '',
            start: new Date(),
            end: addHours(new Date(), 2),
            bgColor: '#3a4e21',
            user: {
                _id: '13d53f4',
                name: 'Bruno'
            }
        });
        openDateModal();
    }

    return (
        <button
            className="btn btn-primary fab"
            onClick={handleClickNew}
        >
            <i className="fas fa-plus"></i>
        </button>
    )
}
