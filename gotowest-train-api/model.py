import sys
import numpy as np
import joblib as jl
import pandas as pd
import matplotlib.pyplot as plt
# from sklearn.naive_bayes import GaussianNB
# from sklearn.model_selection import train_test_split

# interpreter  python 3.7.2
# filename = 'model_NBC.sav'
# filename = '221105NBC.json'
filename = './gotowest-train-api/221105NBC_2.pkl'
loaded_model = jl.load(filename)


# load models, test and return result
def pose_classification (param) : 

    #2차원 배열 int 형으로 변환
    list = []
    for i in param : 
        list.append(int(i))

    angles = [list,]

    result = loaded_model.predict(angles)
    print(result)
    
    return result

def main () :
    #get parameter
    ag = sys.argv[1:]
    print(ag)

    result = pose_classification(ag)
    #print("result : "+ result)
    return result

if __name__ == "__main__" : 
    main()
    