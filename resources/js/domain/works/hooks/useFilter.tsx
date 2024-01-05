import { useState, useEffect } from 'react';

import { router } from '@inertiajs/react';

type FilterProps<T extends string> = Record<T, string[]>;

type DisplayFilterProps<T extends string> = {
    type: T;
    value: string;
};

const getInitialDisplayFilters = <T extends string>(
    filters: FilterProps<T>
): DisplayFilterProps<T>[] => {
    return Object.keys(filters).reduce((accumulatedFilters, filterType) => {
        const filterValues = filters[filterType as T] || [];
        return accumulatedFilters.concat(
            filterValues.map(
                (value): DisplayFilterProps<T> => ({
                    type: filterType as T,
                    value,
                })
            )
        );
    }, [] as DisplayFilterProps<T>[]);
};

/**
 * 필터 검색 커스텀 훅
 *
 * @param {string} options.queryName - 검색할 route 페이지를 넣으세요.
 */
const useFilter = <T extends string>(queryName: string) => {
    const defaultFilters: FilterProps<T> = {} as FilterProps<T>;

    const [selectedFilters, setSelectedFilters] = useState<FilterProps<T>>(defaultFilters);
    const [displayFilters, setDisplayFilters] = useState<DisplayFilterProps<T>[]>([]);

    const handleToggleFilter = (existingValues: string[] = [], value: string) => {
        return existingValues.includes(value)
            ? existingValues.filter(selectedValue => selectedValue !== value)
            : [...existingValues, value];
    };

    const onFetchPerformances = (filters: FilterProps<T>) => {
        const queryString = Object.entries(filters)
            .map(([key, values]) =>
                (values as string[]).length
                    ? `${key}=${(values as string[]).map(encodeURIComponent).join(',')}`
                    : ''
            )
            .filter(Boolean)
            .join('&');

        const routePath = queryString ? route(queryName) + '?' + queryString : route(queryName);

        router.get(routePath, {}, { preserveState: true, preserveScroll: true });
    };

    const onFilterUpdate = (filterType: T, value: string) => {
        const updatedFilters = {
            ...selectedFilters,
            [filterType]: handleToggleFilter(selectedFilters[filterType], value),
        };

        const displayFilters: DisplayFilterProps<T>[] = getInitialDisplayFilters<T>(updatedFilters);

        setDisplayFilters(displayFilters);
        setSelectedFilters(updatedFilters);
        onFetchPerformances(updatedFilters);
    };

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);

        const updatedFilters = Object.keys(defaultFilters).reduce(
            (accumulatedFilters, filterType) => {
                const param = urlParams.getAll(filterType);
                return param.length
                    ? { ...accumulatedFilters, [filterType]: param }
                    : accumulatedFilters;
            },
            defaultFilters
        ) as FilterProps<T>;

        const initialDisplayFilters: DisplayFilterProps<T>[] =
            getInitialDisplayFilters<T>(updatedFilters);

        setSelectedFilters(updatedFilters);
        setDisplayFilters(initialDisplayFilters);
    }, []);

    return {
        selectedFilters,
        displayFilters,
        onFilterUpdate,
    };
};

export default useFilter;
