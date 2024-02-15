package main

import (
	"fmt"
	"net/http"

	"github.com/aws/aws-sdk-go/aws"
	"github.com/aws/aws-sdk-go/aws/session"
	"github.com/aws/aws-sdk-go/service/s3"
	"github.com/gin-gonic/gin"
)

func main() {
	r := gin.Default()

	r.GET("/", func(c *gin.Context) {
		c.JSON(200, gin.H{
			"message": "Hello, world!",
		})
	})

	r.GET("/cv", func(c *gin.Context) {
		// Initialize a session in us-west-2 that the SDK will use to load
		// credentials from the shared credentials file ~/.aws/credentials.
		sess, err := session.NewSession(&aws.Config{
			Region: aws.String("eu-north-1")},
		)

		if err != nil {
			c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to create session"})
			return
		}

		svc := s3.New(sess)

		// Get the object from the bucket.
		result, err := svc.GetObject(&s3.GetObjectInput{
			Bucket: aws.String("nyggis"),
			Key:    aws.String("files/CV_alexander-nygaard.pdf"),
		})

		if err != nil {
			c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to get file from S3"})
			fmt.Println("Got error getting item from bucket: ", err)
			return
		}

		defer result.Body.Close()
		c.DataFromReader(http.StatusOK, *result.ContentLength, "application/pdf", result.Body, nil)
	})

	r.Run() // By default, it will listen on :8080
}
