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
filename = '221105NBC_2.pkl'
loaded_model = jl.load(filename)


# load models, test and return result
def pose_classification (param) : 

    angles = [param,]
    result = loaded_model.predict(angles)

    #print(angles) 
    #print(result)
    
    return result

def main () :
    #get parameter
    ag = sys.argv[1:]

    result = pose_classification(ag)
    #print("result : "+ result)
    return result

if __name__ == "__main__" : 
    main()
    