import React, {useEffect, useRef, useState} from 'react'
import {Set} from "immutable";
import {
    FilterQuery,
    MultiselectOption,
    RidesFilterConfig,
    RideType
} from "../../types";
import {Col, Row} from "react-bootstrap";
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

    const rideTypesMultiselectRef = useRef<Multiselect | null>(null);
    const citiesMultiselectRef = useRef<Multiselect | null>(null);
    const timesMultiselectRef = useRef<Multiselect | null>(null);
    const daysMultiselectRef = useRef<Multiselect | null>(null);

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

    const resetFilters = () => {
        setSelectedRideTypes(Set())
        setSelectedDays(Set())
        setSelectedTimes(Set())
        setSelectedCities(Set())

        rideTypesMultiselectRef.current?.resetSelectedValues()
        citiesMultiselectRef.current?.resetSelectedValues()
        timesMultiselectRef.current?.resetSelectedValues()
        daysMultiselectRef.current?.resetSelectedValues()
    }

    return <div id="rides-filters" className="mb-2 p-2">
        <Row className="h-100 g-0 row-cols-2">
            <Col className="col-xl-6 col-12 p-2">
                {/* <Row className="ride-filters-ride-type g-0">
                    {config.rideTypes.map(rideType =>
                        <Col className="col-xxl-4 col-12 p-0 m-0" key={rideType.name}>{getRideButton(rideType)}</Col>
                    )}
                </Row> */}

                <Multiselect
                    options={config.rideTypes}
                    displayValue="name"
                    placeholder="Wybierz rodzaj ustawki"
                    onSelect={(selectedList, selectedItem) => {
                        setSelectedRideTypes(Set(selectedList))
                    }}
                    onRemove={(selectedList, selectedItem) => {
                        setSelectedRideTypes(Set(selectedList))
                    }}
                    ref={rideTypesMultiselectRef}
                />

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