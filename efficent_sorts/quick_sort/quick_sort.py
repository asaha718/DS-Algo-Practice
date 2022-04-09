#average big O time is O(n*log n). only the worst case is n**2
# def quicksort(array): 
#     if len(array) < 2: 
#         return array
#     else: 
#         pivot = array[0]
#         less = [i for i in array[1:] if i <= pivot]
#         greater = [i for i in array[1:] if i> pivot]
#         return quicksort(less) + [pivot] + quicksort(greater)

# print(quicksort([10, 5, 2, 3]))

def get_max_profit(stock_prices):
    max_profit= 0
    
    for i in range(0, len(stock_prices)-1):
        for j in range(i+1, len(stock_prices)-1): 
            new_profit= stock_prices[j] - stock_prices[i] 
            if new_profit > max_profit: 
                max_profit = new_profit 
    return max_profit
        
print(get_max_profit([10, 7, 5, 8, 11, 9]))