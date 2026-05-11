import pandas as pd
import numpy as np
from sklearn.datasets import load_iris
from sklearn.model_selection import train_test_split
from sklearn.neighbors import KNeighborsClassifier


iris_dataset = load_iris()
 
X_train,X_test,y_train,y_test = train_test_split(iris_dataset['data'],iris_dataset['target'],random_state=0)

knn = KNeighborsClassifier(n_neighbors=1)
knn.fit(X_train, y_train)
 
X_new = np.array([[5, 2.9, 1, 0.2]])
prediction = knn.predict(X_new)

# [0]
print("Prediction:", prediction) 

# ['setosa']
print("Predicted target name:",
       iris_dataset['target_names'][prediction])

y_prediction = knn.predict(X_test)
# [2 1 0 2 0 2 0 1 1 1 2 1 1 1 1 0 1 1 0 0 2 1 0 0 2 0 0 1 1 0 2 1 0 2 2 1 0 2]
print("Test set predictions:\n", y_prediction)

print("Test set score: {:.2f}".format(knn.score(X_test, y_test)))

# ------------------- Summary ------------------- 
print('------------------- Summary ------------------- ')

# Step-1: Prepare test and train data

XX_train, XX_test,yy_train,yy_test = train_test_split(iris_dataset['data'],iris_dataset['target'],random_state=0)

# Step-2: Fit model

knn = KNeighborsClassifier(n_neighbors=3)
knn.fit(XX_train, yy_train)
 

# Step-3: Check Sample

# Sample index
index = 85

# Sample data: [6.9 3.1 5.4 2.1]
XX_NEW = iris_dataset['data'][index]
 
# Index of sample data: 2
true_index = iris_dataset['target'][index]

# Index of predicted data: [2]
predictedXX_NEW = knn.predict([XX_NEW]) 

true_target_name = iris_dataset['target_names'][true_index]
predicted_target_name = iris_dataset['target_names'][predictedXX_NEW[0]]

print("True Label:", true_index,":",true_target_name)
print("Predicted Label:", predictedXX_NEW[0],":",predicted_target_name)
 