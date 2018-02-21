'use strict'

const fr = require('face-recognition')

module.exports.hello = (event, context, callback) => {
	console.log('body:', JSON.parse(event.body))

	const image = fr.loadImage('photo_resized.jpg')
	const detector = fr.FaceDetector()
	const detectedFaces = detector.locateFaces(image)

	console.log('detectedFaces ->', detectedFaces)

	callback(null, {
		statusCode: 200,
		body: JSON.stringify(detectedFaces)
	})

	// sharp('photo_resized.jpg')
	// 	.resize(100, 100)
	// 	.max()
	// 	.withoutEnlargement()
	// 	.toColorspace('b-w')
	// 	.toFile('/tmp/test.jpg')
	// 	.then(() => {
	// 		callback(null, {
	// 			statusCode: 200,
	// 			body: 'yey'
	// 		})
	// 	})
}
