export default THREE => {
    // material
    const black = new THREE.MeshPhongMaterial({
        color: '#000000',
    });
    const blue = new THREE.MeshPhongMaterial({
        color: '#5ba7bf',
    });
    const red = new THREE.MeshPhongMaterial({
        color: '#9b2525',
    });
    const white = new THREE.MeshPhongMaterial({
        color: '#ffffff',
    });
    const group_head = new THREE.Group();

    const bloc_head = new THREE.Mesh(new THREE.BoxGeometry(30, 30, 20), white);

    group_head.add(bloc_head);

    // ******* EYES ******* //
    const group_eye_left = new THREE.Group();
    const eye_border = new THREE.Mesh(new THREE.CircleGeometry(4, 25), black);
    const eye_sclera = new THREE.Mesh(new THREE.CircleGeometry(3.5, 25), white);
    const eye_iris = new THREE.Mesh(new THREE.CircleGeometry(2, 25), blue);
    const eye_pupil = new THREE.Mesh(new THREE.CircleGeometry(1, 25), black);

    group_eye_left.add(eye_border);
    group_eye_left.add(eye_sclera);
    group_eye_left.add(eye_iris);
    group_eye_left.add(eye_pupil);
    eye_border.position.z = .2;
    eye_sclera.position.z = .3;
    eye_iris.position.z = .4;
    eye_pupil.position.z = .5;

    const group_eye_right = group_eye_left.clone();
    // ******************** //

    // ******* LINES-UP ******* //
    const group_line_up1 = new THREE.Group();
    const lineup1 = new THREE.Mesh(new THREE.PlaneGeometry(0.1, 0.5), red);
    const lineup2 = new THREE.Mesh(new THREE.PlaneGeometry(0.2, 0.5), red);
    const lineup3 = new THREE.Mesh(new THREE.PlaneGeometry(0.3, 0.5), red);
    const lineup4 = new THREE.Mesh(new THREE.PlaneGeometry(0.4, 0.5), red);
    const lineup5 = new THREE.Mesh(new THREE.PlaneGeometry(0.5, 0.75), red);
    const lineup6 = new THREE.Mesh(new THREE.PlaneGeometry(0.6, 1), red);
    const lineup7 = new THREE.Mesh(new THREE.PlaneGeometry(0.6, 1.5), red);
    const lineup8 = new THREE.Mesh(new THREE.PlaneGeometry(0.7, 2), red);

    group_line_up1.add(lineup1);
    group_line_up1.add(lineup2);
    lineup2.position.y = -0.5 ;
    group_line_up1.add(lineup3);
    lineup3.position.y = -1 ;
    group_line_up1.add(lineup4);
    lineup4.position.y = -1.5 ;
    group_line_up1.add(lineup5);
    lineup5.position.y = -2 ;
    group_line_up1.add(lineup6);
    lineup6.position.y = -2.5 ;
    group_line_up1.add(lineup7);
    lineup7.position.y = -3 ;
    group_line_up1.add(lineup8);
    lineup8.position.y = -3.5 ;

    const group_line_up2 = group_line_up1.clone();
    // ************************ //

    // ******* LINES-DOWN ******* //
    const group_line_down1 = new THREE.Group();
    const linedown1 = new THREE.Mesh(new THREE.PlaneGeometry(0.1, 0.5), red);
    const linedown2 = new THREE.Mesh(new THREE.PlaneGeometry(0.2, 0.5), red);
    const linedown3 = new THREE.Mesh(new THREE.PlaneGeometry(0.3, 0.5), red);
    const linedown4 = new THREE.Mesh(new THREE.PlaneGeometry(0.4, 0.5), red);
    const linedown5 = new THREE.Mesh(new THREE.PlaneGeometry(0.5, 0.75), red);
    const linedown6 = new THREE.Mesh(new THREE.PlaneGeometry(0.6, 1), red);
    const linedown7 = new THREE.Mesh(new THREE.PlaneGeometry(0.6, 1.5), red);
    const linedown8 = new THREE.Mesh(new THREE.PlaneGeometry(0.7, 2), red);

    group_line_down1.add(linedown1);
    group_line_down1.add(linedown2);
    linedown2.position.y = -0.5 ;
    group_line_down1.add(linedown3);
    linedown3.position.y = -1 ;
    group_line_down1.add(linedown4);
    linedown4.position.y = -1.5 ;
    group_line_down1.add(linedown5);
    linedown5.position.y = -2 ;
    group_line_down1.add(linedown6);
    linedown6.position.y = -2.5 ;
    group_line_down1.add(linedown7);
    linedown7.position.y = -3 ;
    group_line_down1.add(linedown8);
    linedown8.position.y = -3.5 ;

    // ************************** //

    group_head.add(group_eye_left);
    group_head.add(group_eye_right);
    group_head.add(group_line_up1);
    group_head.add(group_line_up2);
    group_head.add(group_line_down1);
    group_eye_left.position.set(-8, 6.5, 10.01);
    group_eye_right.position.set(8, 6.5, 10.01);
    group_line_up1.position.set(8, 14.5, 10.1);
    group_line_up2.position.set(-8, 14.5, 10.1);
    group_line_down1.position.set(-8, 4.5, 10.1);

    group_head.traverse(m => m.castShadow = true);

    return group_head;
}
