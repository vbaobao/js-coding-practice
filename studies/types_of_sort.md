# Sorting

Algorithm | Time Complexity
---|---
**Selection Sort | O(n^2)**
**Bubble Sort | O(n^2)**
**Insertion Sort | O(n^2)**
**Heap Sort | O(nlogn)**
**Quick Sort | O(nlogn)**
**Merge Sort | O(nlogn)**
Bucket Sort | O(n + k)
Radix Sort | O(nk)
**TimSort | O(nlogn)**

## Selection Sort

This type of sort takes on average O(n^2) time complexity.

This sort only needs a copy of the original array.

The array with remaining values is iterated through multiple times, each time the size of the array is reduced by 1. Each time the smallest (or largest) value is placed at the beginning of the copied array slice by swapping values.

## Bubble Sort

Bubble sort also averaged out to O(n^2) time complexity.

The array is iterated through checking if two array values are in order. If not, the value is swapped with the other.

This sort algorithm continually iterates through an array until no swaps are needed.

## Insertion Sort

Insertion sort is yet another algorithm that has an average time complexity of O(n^2).

This type of sort iterates through an array, but when a value is not sorted it will traverse down the array in the opposite direction via swapping until it is in the correct place.

## Heap Sort

This type of sorting means we create a heap structure to create a sorted array. Time complexity is O(nlogn).

One thing that can be taken advantage of when using an array in a heap structure is that the index of children and parents can be calculated, and a heap can be created that way.

> If parent is at index i.
> Left child L is L = 2 * i + 1
> Right child R is R = 2 * i + 2

In order to do this type of sort we need a helper function heapify to resort a heap that is partially out of order. And a build min/max heap function.

```javascript
// Use heapify on the smaller of first half of an array to heapify the array
// When done, the sort can be done by switching the top value (max) with the bottom
const heapify = (array, len, i) => {
  let largest = i;
  let left = 2 * i + 1;
  let right = 2 * 1 + 2;

  if (left < len && array[l] > array[largest]) largest = left;
  if (right < len && array[right] > array[largest]) largest = right;
  if (largest != i) {
    let temp = array[i];
    array[i] = array[largest];
    array[largest] = temp;

    heapify(array, len, largest);
  }
};
```

To create a sorted array, first a heap is built from the array. Switch the root with the last index. Pop the root and assign it to the final sorted array. Then heapify the heap again, and repeat until the entire sorted array is built.

## Quick Sort

Quick sort is a faster sorting methods that utilizes divde and conquer, time complexity of O(nlogn).

The given array will have an identified pivot point (best chosen by comparing the first, middle, and last index values, and swap them in order of low - mid - high. That way their position is closest to final.)

A helper function Partition will partition the array first. Partition will partially order the array by moving items to their place by comparing their values with the partition index value. What is returned is the final partition index, which is where the final position of the indexed value should be.

The partition works by comparing the values from the right and values from the left of the array. Left is the first item on the left that is larger than pivot, and right is an item on the right that is smaller than the pivot. Swap the two values until item from Right is less than item from right, and which spoint item from left is swapped with pivot.

## Merge Sort

Merge sort is also on average O(nlogn).

This type of sort will split the array in halves until there is only 1 value remaining. At which point the process reverses by ordering the values by swapping into a merged array.

It's a bit weird, as the array is resorted in O(n) time at each level prior to merging.

## Timsort

Timsort is an algorithm used in some browsers. It is a sorting algorithm that combined insertion sort and merge sort.
