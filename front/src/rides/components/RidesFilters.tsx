import React, {useEffect, useRef, useState} from 'react'
import {List, Set} from "immutable";
import {
    FilterQuery,
    MultiselectOption,
    Ride,
    RidesFilterConfig,
    RideType
} from "../../types";
import {Button, Col, Row} from "react-bootstrap";
import RideBadge from "./RideBadge";
import {Multiselect} from "multiselect-react-dropdown";
import * as Icon from "react-bootstrap-icons";

export interface RidesFiltersProps {
    readonly config: RidesFilterConfig;
}

export interface RidesFiltersActionProps {
    readonly onFiltersUpdated: (query: FilterQuery) => void
}

const RidesFilters: React.FC<RidesFiltersProps & RidesFiltersActionProps> = ({config, onFiltersUpdated}) => {

    const [selectedRideTypes, setSelectedRideTypes] = useState<Set<RideType>>(Set())
    const [selectedCities, setSelectedCities] = useState<Set<MultiselectOption>>(Set())
    const [selectedTimes, setSelectedTimes] = useState<Set<MultiselectOption>>(Set())
    const [selectedDays, setSelectedDays] = useState<Set<MultiselectOption>>(Set())

    const citiesMultiselectRef = useRef<Multiselect | null>(null);
    const timesMultiselectRef = useRef<Multiselect | null>(null);
    const daysMultiselectRef = useRef<Multiselect | null>(null);


    const onRideTypeButtonClicked: (value: RideType) => void = (value: RideType) => {
        let newActiveButtons
        if (selectedRideTypes.has(value)) {
            newActiveButtons = selectedRideTypes.delete(value)
        } else {
            newActiveButtons = selectedRideTypes.add(value)
        }
        setSelectedRideTypes(newActiveButtons)
    }

    const isActive: (value: RideType) => string = (value: RideType) => {
        return selectedRideTypes.has(value) ? 'active' : ''
    }

    useEffect(() => {
        onFiltersUpdated(
            {
                rideTypes: selectedRideTypes,
                cities: selectedCities.map(cityOption => cityOption.name).toSet(),
                times: selectedTimes.map(timeOption => timeOption.name).toSet(),
                days: selectedDays.map(dayOption => dayOption.name).toSet()
            }
        )
    }, [selectedRideTypes, selectedCities, selectedDays, selectedTimes, onFiltersUpdated])


    const getRideButton: (rideType: RideType) => React.ReactNode = rideType =>
        <Button className={`w-100 ride-filters-ride-type-button ${isActive(rideType)}`}
                onClick={() => onRideTypeButtonClicked(rideType)}>
            <RideBadge rideType={rideType}/>
        </Button>

    const resetFilters = () => {
        setSelectedRideTypes(Set())
        setSelectedDays(Set())
        setSelectedTimes(Set())
        setSelectedCities(Set())

        citiesMultiselectRef.current?.resetSelectedValues()
        timesMultiselectRef.current?.resetSelectedValues()
        daysMultiselectRef.current?.resetSelectedValues()
    }

    return <div id="rides-filters" className="mb-2 p-2">
        <Row className="h-100 g-0 row-cols-2">
            <Col className="col-xl-6 col-12 p-2">
                <Row className="ride-filters-ride-type g-0">
                    {config.rideTypes.map(rideType =>
                        <Col className="col-xxl-4 col-12 p-0 m-0" key={rideType.name}>{getRideButton(rideType)}</Col>
                    )}
                </Row>
            </Col>

            <Col className="col-xl-6 col-12 p-2">
                <Multiselect
                    options={config.cities}
                    displayValue="name"
                    placeholder="Wybierz miasto"
                    onSelect={(selectedList, selectedItem) => {
                        setSelectedCities(Set(selectedList))
                    }}
                    onRemove={(selectedList, selectedItem) => {
                        setSelectedCities(Set(selectedList))
                    }}
                    ref={citiesMultiselectRef}
                />
            </Col>
        </Row>

        <Row className="h-100 g-0 row-cols-2">
            <Col className="col-xl-6 col-12 p-2">
                <Multiselect
                    options={config.times}
                    displayValue="name"
                    placeholder="Wybierz godzinę"
                    onSelect={(selectedList, selectedItem) => {
                        setSelectedTimes(Set(selectedList))
                    }}
                    onRemove={(selectedList, selectedItem) => {
                        setSelectedTimes(Set(selectedList))
                    }}
                    ref={timesMultiselectRef}
                />
            </Col>

            <Col className="col-xl-6 col-12 p-2">
                <Multiselect
                    options={config.days}
                    displayValue="name"
                    placeholder="Wybierz dzień"
                    onSelect={(selectedList, selectedItem) => {
                        setSelectedDays(Set(selectedList))
                    }}
                    onRemove={(selectedList, selectedItem) => {
                        setSelectedDays(Set(selectedList))
                    }}
                    ref={daysMultiselectRef}
                />
            </Col>
        </Row>
        <Row className="p-2 g-0">
            <Col className="text-end text-uppercase">
                <span onClick={resetFilters} className="text-muted rides-filters-reset">Resetuj <Icon.Trash/></span>
            </Col>
        </Row>
    </div>
}

export default RidesFilters